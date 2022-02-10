import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Close from '@material-ui/icons/Close'
import Menu from '@material-ui/icons/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

const useStyles = makeStyles(styles)

type HeaderProps = { links?: React.ReactNode }

const Header = ({ links }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const isScrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })
    const classes = useStyles({ isScrollTrigger })

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <AppBar className={`${classes.header}`}>
            <Toolbar className={classes.container}>
                <Link
                    className="_pdv-8px _pdh-24px _bgcl-shader-hover "
                    to="/"
                    title="Go to main page"
                >
                    <img
                        className="_h-32px _h-48px-sm _pdv-4px _mgr-12px"
                        src="./images/text-logo.svg"
                    />
                </Link>

                <Hidden smDown implementation="js">
                    <div className={classes.collapse}>{links}</div>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        className={classes.iconButton}
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>

            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={'right'}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    PaperProps={{
                        className: ' _ovfy-at _ovfx-hd _dp-f',
                        style: {
                            backgroundColor: 'var(--sidebar-background-color)',
                            backdropFilter: 'var(--sidebar-backdrop-filter)',
                        },
                    }}
                    onClose={handleDrawerToggle}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.closeButtonDrawer}
                    >
                        <Close />
                    </IconButton>
                    <div className={classes.appResponsive}>{links}</div>
                    <div className="_f-1">{/* <Sidebar /> */}</div>
                    {/* <SocialList className="_w-100pct _dp-f _fw-w _alit-ct _jtfct-ct _mgbt-12px" /> */}
                </Drawer>
            </Hidden>
        </AppBar>
    )
}

export default Header
