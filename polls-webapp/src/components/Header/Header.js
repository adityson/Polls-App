import { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import PollRounded from "@material-ui/icons/PollRounded";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import decode from "jwt-decode";

import useStyles from "./styles";

const Header = ({ pageTitle }) => {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const location = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  return (
    <AppBar color="default" className={classes.appBar} position="static">
      <div className={classes.titleDiv}>
        <Typography
          component={Link}
          to="/"
          style={{ textDecoration: "none" }}
          className={classes.title}
          variant="h2"
          align="center"
        >
          {pageTitle}
        </Typography>
        <PollRounded style={{ color: "#690B3D", margin: 10, fontSize: 50 }} />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.loginProfile}>
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name[0]}
            </Avatar>
            <Button size="medium" variant="contained" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        ) : (
          <Button size="medium" variant="contained" component={Link} to="/auth">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  pageTitle: "Online Polls",
};

export default Header;
