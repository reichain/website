import classNames from 'classnames'
import ReactModal from 'react-modal'
import { ReactComponent as ModalCloseButton } from './modal-close-button.svg'
import styles from './styles.module.scss'

type ModalProps = {
    children: React.ReactNode
    isOpen: boolean
    showCloseButton?: boolean
    className?: string
    onCloseModal?: () => any
    style?: {
        content: React.CSSProperties
    }
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>

const Modal = ({
    children,
    onCloseModal,
    isOpen,
    showCloseButton = true,
    className,
    ...props
}: ModalProps) => {
    return (
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            className={classNames(className, styles.modalContent)}
            overlayClassName={styles.modalOverlay}
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Modal"
            onRequestClose={onCloseModal}
            {...props}
        >
            {onCloseModal && showCloseButton && (
                <ModalCloseButton
                    className={styles.closeButton}
                    onClick={onCloseModal}
                />
            )}
            {children}
        </ReactModal>
    )
}

export default Modal
