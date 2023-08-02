import { ReactNode } from "react";

// ----------------------------------------------------------------------

const useCurrentRole = () => {
  // Logic here to get current user role
  const role = "admin";
  return role;
};

export default function RoleBasedGuard({
  accessibleRoles,
  children,
}: {
  accessibleRoles: string[];
  children: ReactNode;
}) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <div>
        {/* <Alert severity="error"> */}
        <h2>Permission Denied</h2>
        You do not have permission to access this page
        {/* </Alert> */}
      </div>
    );
  }

  return <>{children}</>;
}
