"use client";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/app/(components)/button";
import Icon from "@/app/(components)/Icon";
import Typography from "@/app/(components)/typography";

interface ModalProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  leftFooterContent?: React.ReactNode;
  title: string;
  confirmBtn?: {
    label: string;
    onClick: () => void;
  };
  cancelBtn?: {
    label: string;
    onClick: () => void;
  };
  subtitle?: string;
  isCloseable?: boolean;
}

interface HeaderProps {
  title: string;
  subtitle?: string;
  isCloseable?: boolean;
  onClose?: () => void;
}

const Modal = ({
  open,
  onClose,
  children,
  leftFooterContent,
  confirmBtn,
  cancelBtn,
  title,
  subtitle,
  isCloseable,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      id="booking-modal"
    >
      <div className="bg-surface-light rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden">
        <Header
          title={title}
          subtitle={subtitle}
          isCloseable={isCloseable}
          onClose={onClose}
        />
        {children}
        <Footer
          cancelBtn={cancelBtn}
          confirmBtn={confirmBtn}
          leftFooterContent={leftFooterContent}
        />
      </div>
    </div>
  );
};

const Header = ({ isCloseable, subtitle, title, onClose }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between p-5 border-b border-neutral-200 w-full">
      <div>
        <Typography
          as="h2"
          variant="heading"
          size="lg"
          color="default"
          className="leading-tight"
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography as="p" variant="body" color="muted">
            {subtitle}
          </Typography>
        )}
      </div>
      {isCloseable && (
        <Icon icon={IoCloseOutline} size="xl" onClick={() => onClose?.()} />
      )}
    </div>
  );
};

const Footer = ({
  leftFooterContent,
  cancelBtn,
  confirmBtn,
}: {
  leftFooterContent?: React.ReactNode;
  confirmBtn?: {
    label: string;
    onClick: () => void;
  };
  cancelBtn?: {
    label: string;
    onClick: () => void;
  };
}) => {
  return (
    <div className="p-6 border-t border-neutral-200 bg-neutral-50/50 flex items-center justify-between gap-4">
      {leftFooterContent && leftFooterContent}
      <div className="flex gap-3">
        {cancelBtn && (
          <Button
            variant="secondary"
            size="md"
            onClick={() => cancelBtn?.onClick?.()}
          >
            {cancelBtn?.label || "Cancel"}
          </Button>
        )}
        <Button
          variant="primary"
          size="md"
          onClick={() => cancelBtn?.onClick?.()}
        >
          {confirmBtn?.label || "Confirm"}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
