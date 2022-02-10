import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyD_Lq9uh2Xmcts7xLIxqjA3p2XDhuQWLm0',
    authDomain: 'rei-chain.firebaseapp.com',
    projectId: 'rei-chain',
    storageBucket: 'rei-chain.appspot.com',
    messagingSenderId: '744272776788',
    appId: '1:744272776788:web:473fb504f7c510500367c1',
    measurementId: 'G-L7HWP5CJ33',
}

export const initialize = () => {
    initializeApp(firebaseConfig)
}

export const setAnalyticsEnabled = (isEnabled: boolean) => {
    const analytis = getAnalytics()

    setAnalyticsCollectionEnabled(analytis, isEnabled)
}

export default initialize
