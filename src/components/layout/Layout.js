import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <div>
        <MainNavigation />
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
