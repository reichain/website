import classNames from 'classnames'
import Modal from 'components/Modal/Modal'
import { memo, useCallback, useState } from 'react'
import styles from './styles.module.scss'

const Disclaimer = () => {
    const [isClosedModal, setIsClosedModal] = useState<boolean>(false)

    const handleOnAccpect = useCallback(() => {
        setIsClosedModal(true)
    }, [])

    return (
        <Modal isOpen={!isClosedModal} className={classNames(styles.container, '_fs-100 _fs-300-sm')}>
            <h2 className="_tal-ct _w-100pct">Acknowledge terms</h2>
            <br />
            <p className="_pdh-8px">
            This list is for informational purposes only; Rei Chain does not endorse or approval any project listed here. 
            </p>
            <br />
            <div className="rei-slate _mgbt-12px">
            Rei Chain bears no responsibility for the accuracy, legality, security or content of the external sites linked or for that of subsequent links. 
            For any questions or comments surrounding any of the projects listed, please contact such projects directly.
            </div>
            <div className="_w-100pct _mgt-12px">
                <button
                    className="rei-button _w-100pct"
                    onClick={handleOnAccpect}
                >
                    OK
                </button>
            </div>
        </Modal>
    )
}

export default memo(Disclaimer)
