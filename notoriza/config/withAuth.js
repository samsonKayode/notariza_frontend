import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

    //   const userExists = localStorage.getItem("userData");
      const userExists = JSON.parse(localStorage.getItem("userData"))

      // If there is no access token we redirect to "/" page.

      

      if (!userExists || !checkUserType(userExists.data)) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

const checkUserType = (user) => {
   return user.roles.some((role) => {
        return role.name == "USER"
    })
}

export default withAuth;