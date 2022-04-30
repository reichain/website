import classNames from 'classnames'
import { LIST, TAG_LIST } from 'config/constants/ecosystem'
import { useCallback, useState } from 'react'
import Particles from 'react-tsparticles'
import type { Container } from 'tsparticles'
import Disclaimer from './components/Disclaimer/Disclaimer'
import './styles.scss'

export const Home = () => {
    const [currentTag, setCurrentTag] = useState<string | null>(null)
    const [currentSearch, setCurrentSearch] = useState<string>('')
    const handleClickTag = useCallback((tag) => {
        setCurrentTag((prev) => (prev === tag ? null : tag))
    }, [])
    const handleChangeSearch = useCallback((element) => {
        setCurrentSearch(element.target.value.trim())
    }, [])
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
        <div
            className="ecosystem-page _pst-rlt _mgbt-24px _mgbt-48px-sm _ovfx-hd"
            style={{
                paddingTop: 'var(--header-height)',
            }}
        >
            <Disclaimer />
            <div className="_pst-rlt _zid-1 _tal-ct _mgt-24px _pdbt-32px">
                <img
                    src="./images/ecosystem/echosystem-wave.svg"
                    className="_pst-asl _t-0px _l-0px _r-0px _w-100pct-sm _tf-n-sm _zid--2"
                    style={{ transform: 'translate(-50%, 0)' }}
                />
                <Particles
                    canvasClassName="_pst-asl _zid--1"
                    style={{ position: 'absolute' }}
                    url="./images/ecosystem/particlesjs-config.json"
                    loaded={onLoadedParticles}
                />
                <div
                    className="_fs-800 _fs-900-sm _pdv-4px _pdh-4px _bdrd-4px _mgbt-12px _bdfb-1px _w-fc _mgh-at"
                    style={{ backgroundColor: 'rgb(244 222 129 / 30%)' }}
                >
                    REI Ecosystem
                </div>
                <div
                    className="_fs-400 _fs-500-sm _pdv-4px _pdh-4px _bdrd-4px _mgbt-48px _bdfb-1px _w-fc _mgh-at"
                    style={{ backgroundColor: 'rgb(244 222 129 / 30%)' }}
                >
                    Connects a decentralized world into everyday lives with
                    ease.
                </div>
                <a
                    className="rei-button _w-fc _mgh-at"
                    target="_blank"
                    href="https://q4cgscoyhne.typeform.com/to/VcKMbwm4"
                    rel="noreferrer"
                >
                    Contact Us
                </a>
            </div>
            <input
                className="_w-fc _ffml-secondary _fs-300 _fs-400-sm _pdl-48px _pdr-12px _pdv-8px _zid-1 _mgh-at _mgt-32px _mgbt-32px"
                style={{
                    border: '1px solid rgba(196, 196, 196, 1)',
                    color: 'rgba(98, 98, 98, 1)',
                    backgroundColor: 'rgba(255,255,255, 0.97)',
                    backgroundImage: "url('./images/ecosystem/search.svg')",
                    backgroundPosition: '10px 5px',
                    backgroundRepeat: 'no-repeat',
                    minWidth: 'min(350px, 90vw)',
                }}
                onChange={handleChangeSearch}
                placeholder="Search projects by name"
            />
            <div className="rei-hide-scollbar _dp-f _fw-w-sm _ovfx-at _jtfct-ct-sm _zid-1 _mgbt-16px">
                {TAG_LIST.map((tag) => (
                    <div
                        key={tag}
                        className={classNames(
                            'rei-button _mnh-fc _bdcl-base-200 _wsp-nw _lh-150pct _lh-115pct-sm _fs-100 _fs-200-sm _fw-500 _pdv-4px _pdv-8px-sm _pdh-8px _pdh-16px-sm _mgh-4px _mgh-8px-sm _mgbt-12px',
                            currentTag === tag ? '-primary' : '-secondary'
                        )}
                        onClick={() => handleClickTag(tag)}
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="_dp-f _fw-w _jtfct-ct _zid-1">
                {LIST.filter(
                    (item) =>
                        (currentTag
                            ? item.tagList.includes(currentTag)
                            : true) &&
                        (currentSearch
                            ? item.title
                                  .toLocaleLowerCase()
                                  .includes(currentSearch.toLowerCase())
                            : true)
                ).map((item) => (
                    <div
                        key={item.title}
                        className="rei-card _bgcl-grey-10-hover _mgh-4px _mgh-16px-sm _mgh-24px-lg _mgbt-12px _mgbt-24px-sm _mgbt-48px-lg _dp-f _fdrt-cl"
                        style={{ width: 'min(250px, 47%)' }}
                    >
                        <div className="_pdl-12px _pdt-12px rei-hide-scollbar _dp-f _fw-w-sm _wsp-nw _ovfx-at _mgbt-0px _mgbt-4px-sm">
                            {item.tagList.map((tag) => (
                                <div
                                    key={tag}
                                    onClick={() => setCurrentTag(tag)}
                                    className="rei-card rei-button -secondary _bdcl-base-100 _mnh-fc _w-fc _fs-100 _fs-200-sm _fw-500 _pdh-8px _pdv-8px _mgbt-8px _mgr-8px"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="_pd-12px _dp-f _fdrt-cl">
                            <a
                                className="_w-100pct _dp-f"
                                href={item.link || undefined}
                                title={`Visit ${item.title}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={item.imageSrc}
                                    className="_ojf-ct _mgh-at _mgbt-16px _mxw-100pct _pdh-8px _pdh-32px-sm"
                                    style={{
                                        objectPosition: '50% 70%',
                                        height: 'min(75px, 20vw)',
                                    }}
                                />
                            </a>
                            <div className="_fs-400 _fs-500-sm _fs-600-md _fw-400 _tal-ct _mgbt-8px _mgbt-12px-sm">
                                {item.title}
                            </div>
                            <div
                                className="card-description _wsp-pl _ffml-secondary _fs-200 _fs-300-sm _fs-400-sm _pdh-2px _pdh-8px-sm"
                                title={
                                    typeof item.description === 'string'
                                        ? item.description
                                        : item.title
                                }
                            >
                                {item.description}
                            </div>
                        </div>
                        <a
                            className={classNames(
                                'rei-button -ghost _fs-100 _fs-200-sm _fw-500 _dp-f _jtfct-fst _mgt-at _pdh-24px',
                                !item.link && '-disabled'
                            )}
                            href={item.link || undefined}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.link ? (
                                <>
                                    <div>Visit</div>
                                    <svg
                                        className="_mgl-8px _mgt-1px"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
                                            fill="black"
                                        />
                                    </svg>
                                    {item.isComingSoon && (
                                        <span className="_cl-negative-500 _mgl-16px _mgl-12px-sm _lh-130pct">
                                            <span className="_dp-n _dp-il-sm">
                                                (
                                            </span>
                                            Coming Soon
                                            <span className="_dp-n _dp-il-sm">
                                                )
                                            </span>
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span className="_cl-text-secondary-3">
                                    Coming Soon
                                </span>
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
