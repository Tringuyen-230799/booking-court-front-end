# booking-court-front-end

## Environment Setup

- Create a `.env.local` file in the project root with:

```
NEXT_PUBLIC_BACKEND_URL=https://your-backend.example.com
```

- `NEXT_PUBLIC_BACKEND_URL` is required for client-side API calls. Without it, requests will fail with a base URL configuration error.