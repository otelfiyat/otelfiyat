import React from "react";
import AuthButtons from "../AuthButtons";
import Typography from "@/components/UI/Typography";

const SidebarSubHeader = () => {
  //TODO: Implement user authentication and show different components based on user authentication status

  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <>
          <hr className="text-brand-primary-100" />
          <Typography
            variant="p"
            fs={{
              mobile: "title2",
              tablet: "title2",
              desktop: "title2",
            }}
            fw="semibold"
            className="text-brand-primary-700 ms-4"
          >
            Müşteri Adı
          </Typography>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <Typography
            variant="p"
            fs={{
              mobile: "body1",
              tablet: "body1",
              desktop: "body1",
            }}
            fw="medium"
            className="text-brand-neutral-900"
          >
            Üyelere özel fiyatları kaçırmayın!
          </Typography>
          <div className="flex gap-2">
            <AuthButtons />
          </div>
        </div>
      )}
      <hr className="text-brand-primary-100" />
    </>
  );
};

export default SidebarSubHeader;
