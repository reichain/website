import {
    makeStyles,
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core/styles'
import appStyle, { APP_STYLE_PROPS } from 'assets/jss/appStyle'
import createTheme from 'assets/jss/appTheme'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/HeaderLinks/HeaderLinks'
import { useSwitchTheme } from 'components/ThemeProvider/ThemeProvider'
import {
    initialize as initializeFirebase,
    setAnalyticsEnabled,
} from 'config/firebaseConfig'
import Ecosystem from 'pages/Ecosystem/Ecosystem'
import Home from 'pages/Home/Home'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'

const useStyles = makeStyles<null, APP_STYLE_PROPS>(appStyle)

function App() {
    const classes = useStyles({})
    const { themeName } = useSwitchTheme()
    const theme = createTheme(themeName)
    useEffect(() => {
        // initializeGTM()
        initializeFirebase()
        setAnalyticsEnabled(true)
    }, [])

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.key])

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <main className={classes.main}>
                    <Header links={<HeaderLinks />} />
                    <div
                        className="_w-100pct _pst-asl _t-0px"
                        style={{
                            paddingTop: 'var(--header-height)',
                            height: 550,
                            background:
                                'radial-gradient(96.12% 96.12% at 50% 3.88%, #F4DE80 34.71%, rgba(244, 222, 128, 0) 100%)',
                        }}
                    />

                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/ecosystem" element={<Ecosystem />} />
                    </Routes>

                    <Footer />
                </main>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default App
