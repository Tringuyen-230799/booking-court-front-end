import { BACK_END_API_URL } from "shared/constant/request";

interface RequestOptions {
  params?: Record<string, any>;
  cache?: RequestCache;
  headers?: HeadersInit;
  method?: string;
  body?: BodyInit;
}

class RequestClient {
  private baseURL: string;

  constructor(baseURL: string) {
    if (!baseURL) {
      // Provide a clear error for missing env configuration
      console.warn(
        "[RequestClient] Missing BACK_END_API_URL. Set NEXT_PUBLIC_BACKEND_URL in .env.local.",
      );
    }
    this.baseURL = baseURL;
  }

  private buildURL(path: string, params?: Record<string, any>): string {
    try {
      if (!this.baseURL) {
        throw new Error(
          "Base URL is not configured. Ensure NEXT_PUBLIC_BACKEND_URL is set.",
        );
      }
      const url = new URL(path, this.baseURL);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            if (value.length > 0) {
              url.searchParams.append(key, value.join(","));
            }
          } else if (value !== undefined && value !== null) {
            url.searchParams.append(key, value);
          }
        });
      }

      return url.toString();
    } catch (error) {
      console.error("Error building URL:", error);
      throw error;
    }
  }

  async get(path: string, options: RequestOptions = {}) {
    const {
      params,
      cache = "no-store",
      headers = {},
      ...otherOptions
    } = options;

    const url = this.buildURL(path, params);
    try {
      const response = await fetch(url, {
        method: "GET",
        cache,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        ...otherOptions,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json().then((res) => res?.data);
    } catch (error) {
      console.error("GET request error:", error);
      throw error;
    }
  }

  async post(path: string, options: RequestOptions = {}) {
    const {
      params,
      cache = "no-store",
      headers = {},
      body,
      ...otherOptions
    } = options;

    const url = this.buildURL(path, params);

    const response = await fetch(url, {
      method: "POST",
      cache,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...otherOptions,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export const request = new RequestClient(BACK_END_API_URL);
