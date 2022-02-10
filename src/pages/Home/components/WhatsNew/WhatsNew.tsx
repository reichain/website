import classNames from 'classnames'
import styles from './styles.module.scss'
import useFetchList from './useFetchList'

const MAX_LENGTH = 4

interface WhatsNewProps {
    className?: string
}

export const WhatsNew = ({ className }: WhatsNewProps) => {
    const { blogList } = useFetchList()

    return (
        <div
            className={classNames(
                '_pst-rlt _pdv-32px _pdv-48px-sm _pdh-12px _zid-1 _ovf-hd',
                className
            )}
        >
            <div className="_fs-700 _fs-800-sm _fw-500 _mgbt-8px _pdh-16px-sm _tal-ct">
                What’s new on REI Chain
            </div>
            <div className="_ffml-secondary _fs-400 _fs-500-sm _mgbt-8px _mgbt-16px-sm _pdh-16px-sm _cl-text-default-3 _tal-ct">
                Latest news
            </div>
            <div className="_dp-f _fw-w _jtfct-ct _jtfit-ct _grg-12px _grg-24px-sm _gclg-2px _w-100pct _mgh-at">
                {blogList &&
                    blogList.slice(0, MAX_LENGTH).map((item) => (
                        <div
                            key={item.title}
                            style={{ width: 260 }}
                            className="rei-card _bdw-1px _ovf-hd _dp-f _fdrt-cl _jtfct-ct _alit-ct _mg-16px"
                        >
                            <a
                                className="_w-100pct"
                                title="Read More"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="_ojf-ct _w-100pct _bgcl-black"
                                    style={{ height: 160 }}
                                    src={item.thumbnail}
                                />
                            </a>
                            <div className="_dp-f _fdrt-cl _f-1 _pdh-24px _pdv-16px _w-100pct _h-100pct _tal-l _mgr-at">
                                <div
                                    className="_fs-400 _fs-500-sm _fw-400 _mgbt-12px _f-1 _ovfw-bw"
                                    style={{ minHeight: 100 }}
                                >
                                    {item.title}
                                </div>
                                {/* <div
                                    className={classNames(
                                        '_fs-400 _mgbt-12px',
                                        styles.description
                                    )}
                                >
                                    {item.description}
                                </div> */}
                                <a
                                    className="rei-link _fs-300 _fw-600 _dp-f _alit-ct"
                                    title="Read"
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    READ
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        className="_h-12px _h-12px-sm _mgl-4px"
                                    >
                                        <path
                                            d="M11 0.333496L9.11998 2.2135L16.56 9.66683H0.333313V12.3335H16.56L9.11998 19.7868L11 21.6668L21.6666 11.0002L11 0.333496Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
            <a
                href="https://medium.com/rei-chain"
                target="_blank"
                className="rei-button -secondary _w-fc _mgh-at _mgt-32px"
                rel="noreferrer"
            >
                READ MORE 
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    className="_h-12px _h-16px-sm _mgl-12px"
                >
                    <path
                        d="M11 0.333496L9.11998 2.2135L16.56 9.66683H0.333313V12.3335H16.56L9.11998 19.7868L11 21.6668L21.6666 11.0002L11 0.333496Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
        </div>
    )
}

export default WhatsNew
