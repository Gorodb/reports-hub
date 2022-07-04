import React from "react"
import {Link, useLocation} from "react-router-dom"

import classes from './Navbar.module.scss'
import {bindActionCreators} from "redux"
import {clickOnCreateNewProject} from "../../redux/reports/reports.utils"
import {compose} from "../../utils"
import {withApiService} from "../../hoc"
import {connect} from "react-redux"

const NavBar = ({newProject}) => {
  const newProjectLink = useLocation().pathname === '/'
    ? <div className={`${classes.row}`}>
      <div className={classes.right}><span className={classes['header-link']} onClick={() => newProject()}>Add new project</span>
      </div>
    </div>
    : null

  return (
    <header>
      <div className={classes.container}>
        <div className={`${classes.links} ${classes.row}`}>
          <Link className={classes['header-link']} to="./">Reports list</Link>
          <Link className={classes['header-link']} to="./examples">Examples</Link>
        </div>
        <Link to="./" className={`${classes.row} ${classes.center}`}>
          <div className={classes.title}>Reports hub</div>
        </Link>
        {newProjectLink}
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newProject: clickOnCreateNewProject()
  }, dispatch)
}

export default compose(
  withApiService(),
  connect(undefined, mapDispatchToProps)
)(NavBar)
