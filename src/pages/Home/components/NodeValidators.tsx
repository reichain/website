import classNames from 'classnames'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Container } from 'tsparticles'

const LIST = [
    {
        imageSrc: './images/home/validator-node/arken.svg',
        title: 'Arken',
        link: 'https://arken.finance/',
        className: '_pdh-12px',
    },
    {
        imageSrc: './images/home/validator-node/inspex.png',
        title: 'Inspex',
        link: 'https://inspex.co/',
        className: '_pdh-24px',
    },
    {
        imageSrc: './images/home/validator-node/killswitch.svg',
        title: 'KillSwitch Finance',
        link: 'https://killswitch.finance/',
        className: '',
    },
]

export const NodeValidators = () => {
    const onLoadedParticles = useCallback(async (container: Container) => {
        const fn = () => {
            container?.canvas?.element?.style.setProperty(
                'position',
                'absolute'
            )
        }
        fn()
        setTimeout(fn, 100)
    }, [])
    return (
        <div className="_ptev-n _pst-rlt _ovf-hd _dp-g-sm _ovfx-clp _cl-primary-main">
            <img
                src="./images/ecosystem/echosystem-wave.svg"
                className="_pst-asl _t-0px _l-0px _r-0px _w-100pct-sm _tf-n-sm _zid--2"
                style={{ transform: 'translate(-50%, 0)' }}
            />
            <div className="_pst-rlt _t-0px _zid-1 _tal-ct  _pdv-32px _pdv-64px-sm _pdh-32px _pdh-64px-sm ">
                <Particles
                    canvasClassName="_pst-asl _zid--1"
                    style={{ position: 'absolute' }}
                    url="./images/home/validator-node/particlesjs-config.json"
                    loaded={onLoadedParticles}
                />
                <div className="_pst-rlt _fs-700 _fs-800-sm _tal-ct _mgbt-24px _bgcl-grey-20 _w-fc _mgh-at _bdrd-4px _pdh-12px _zid-2">
                    Validator Node Partnership
                </div>
                <div className="_dp-f _fw-w _fdrt-r _alit-ct _jtfct-ct _fw-w">
                    {LIST.map((item, index) => (
                        <a
                            key={index}
                            style={{ height: 100 }}
                            href={item.link || undefined}
                            className="rei-button -outlined _ptev-at _w-256px _mgh-8px _mgh-16px-sm _mgv-8px _mgv-16px-sm _pdh-16px _pdv-12px _pd-16px-sm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={item.imageSrc}
                                alt={item.title}
                                className={classNames(
                                    item.className,
                                    '_w-100pct _h-100pct _ojf-ct _bgcl-white _mg-8px _bdrd-4px'
                                )}
                                title={item.title}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NodeValidators
