import { lazy, Suspense, useEffect, useState } from 'react'
const ModalDisplay = lazy(() => import('./ModalDisplay'))

type ModalProps = {
    isOpen: boolean
} & React.ComponentProps<typeof ModalDisplay>

let isEverShow = false

const Modal = (props: ModalProps) => {
    const [_, setTrig] = useState(false)
    useEffect(() => {
        if (props.isOpen) {
            isEverShow = true
            setTrig(true)
        }
    }, [props.isOpen])

    return (
        <Suspense fallback="Loading...">
            {isEverShow && <ModalDisplay {...props} />}
        </Suspense>
    )
}

export default Modal
