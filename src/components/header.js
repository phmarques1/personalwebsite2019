import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";
import classnames from "classnames";

const Header = props => (
  <div className="header">
    <div className="headerGroup">
      <div>
        <Link to="/">
          <img src={require("../images/logo.png")} width="173" class="logo" />
        </Link>
      </div>
      <div className="menuItems">
        <Link to="/" className={classnames("", props.menuLinkFirst)}>
          Work
        </Link>
        <Link to="/about" className={classnames("", props.menuLinkSecond)}>
          About
        </Link>
      </div>
    </div>
  </div>
);
/*class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "header headerScrolled" : "header"}
      >
    <div className="headerGroup">
      <div>
        <Link to="/">
          <img src={require("../images/logo.svg")} width="173" class="logo" />
        </Link>
      </div>
      <div className="menuItems">
        <Link to="/" className={classnames("", props.menuLinkFirst)}>
          Work
        </Link>
        <Link to="/about" className={classnames("", props.menuLinkSecond)}>
          About
        </Link>
      </div>
    </div>
  </div>
    );
  }
}*/

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
