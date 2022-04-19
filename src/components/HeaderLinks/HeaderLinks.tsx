import CustomDropdown from 'components/CustomDropdown/CustomDropdown'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const addChain = async () => {
    try {
        if ((window as any).ethereum) {
            await (window as any).ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: `0x${parseInt('55555', 10).toString(16)}`,
                        chainName: 'REI',
                        nativeCurrency: {
                            symbol: 'REI',
                            decimals: 18,
                        },
                        rpcUrls: ['https://rei-rpc.moonrhythm.io'],
                        blockExplorerUrls: ['https://reiscan.com'],
                    },
                ],
            })
        } else {
            await window.open(
                'https://killswitchofficial.gitbook.io/rei-chain/technology/rpc-network',
                '_blank'
            )
        }
    } catch (error) {
        console.error('add chain error:', error)
    }
}

export const HeaderLinks = () => {
    const [_, updateState] = useState(false)

    const handleAddChain = useCallback(async () => {
        await addChain()
        updateState((prev) => !prev)
    }, [])

    return (
        <>
            <div className="_dp-f _fdrt-cl _fdrt-r-md _pdt-64px _pdbt-12px _pdv-0px-md _mgh-12px-md">
                <a
                    id="chainlist-button"
                    href="https://chainlist.org/?search=REI%20Chain"
                    target="_blank"
                    rel="noreferrer"
                    title="Add REI Chain on Chainlist.org"
                    className="rei-button -secondary -small _pdv-8px _w-fc-md _dp-f _alit-ct _mgr-8px-md"
                >
                    <img
                        src="./images/home/chainlist.png"
                        height="18"
                        width="18"
                        className="_mgr-8px"
                    />
                    ChainList
                </a>
                <div
                    id="add-rei-button"
                    onClick={handleAddChain}
                    title="Add Chain"
                    className="rei-button -secondary -small _pdv-8px _mgv-8px _mgv-0px-md _w-fc-md _dp-f _alit-ct"
                >
                    <svg
                        viewBox="0 0 24 22"
                        className="_mgr-8px _w-16px _h-16px"
                    >
                        <path
                            fill="#CDBDB2"
                            d="m6.894 19.66 3.127.829v-1.085l.256-.255h1.787v2.17h-1.915l-2.362-1.021z"
                        ></path>
                        <path
                            fill="#CDBDB2"
                            d="m17.106 19.66-3.064.829v-1.085l-.255-.255H12v2.17h1.915l2.361-1.021z"
                        ></path>
                        <path
                            fill="#393939"
                            d="m10.277 17.298-.256 2.106.319-.255h3.32l.383.255-.256-2.106-.51-.319-2.554.064z"
                        ></path>
                        <path
                            fill="#F89C35"
                            d="m8.553 3.064 1.532 3.574.702 10.405h2.49l.766-10.405 1.404-3.574z"
                        ></path>
                        <path
                            fill="#F89D35"
                            d="m1.851 10.915-1.787 5.17 4.468-.255h2.872v-2.234L7.277 9l-.639.511z"
                        ></path>
                        <path
                            fill="#D87C30"
                            d="m5.234 11.489 5.234.128-.574 2.681-2.49-.638z"
                        ></path>
                        <path
                            fill="#EA8D3A"
                            d="m5.234 11.553 2.17 2.043v2.042z"
                        ></path>
                        <path
                            fill="#F89D35"
                            d="m7.404 13.66 2.553.638.83 2.745-.574.319-2.809-1.66z"
                        ></path>
                        <path
                            fill="#EB8F35"
                            d="m7.404 15.702-.51 3.958 3.383-2.362z"
                        ></path>
                        <path
                            fill="#EA8E3A"
                            d="m10.468 11.617.319 5.426-.957-2.777z"
                        ></path>
                        <path
                            fill="#D87C30"
                            d="m4.468 15.766 2.936-.064-.51 3.958z"
                        ></path>
                        <path
                            fill="#D87C30"
                            d="m1.468 21.383 5.426-1.723-2.426-3.894-4.404.319z"
                        ></path>
                        <path
                            fill="#E8821E"
                            d="M10.085 6.638 7.34 8.936l-2.106 2.553 5.234.192z"
                        ></path>
                        <path
                            fill="#DFCEC3"
                            d="m6.894 19.66 3.383-2.362-.256 2.042v1.149l-2.298-.446zm10.213 0-3.32-2.362.256 2.042v1.149l2.298-.446z"
                        ></path>
                        <path
                            fill="#393939"
                            d="m9.064 12.766.702 1.468-2.49-.638z"
                        ></path>
                        <path
                            fill="#E88F35"
                            d="m1.404.064 8.681 6.574-1.468-3.574z"
                        ></path>
                        <path
                            d="M1.404.064.255 3.574l.639 3.83-.447.256.638.574-.51.447.702.638-.447.383 1.02 1.278 4.788-1.47c2.34-1.873 3.49-2.83 3.447-2.873-.042-.042-2.936-2.234-8.68-6.574z"
                            fill="#8E5A30"
                        ></path>
                        <path
                            fill="#F89D35"
                            d="m22.149 10.915 1.787 5.17-4.468-.255h-2.872v-2.234L16.723 9l.639.511z"
                        ></path>
                        <path
                            fill="#D87C30"
                            d="m18.766 11.489-5.234.128.574 2.681 2.49-.638z"
                        ></path>
                        <path
                            fill="#EA8D3A"
                            d="m18.766 11.553-2.17 2.043v2.042z"
                        ></path>
                        <path
                            fill="#F89D35"
                            d="m16.596 13.66-2.553.638-.83 2.745.574.319 2.809-1.66z"
                        ></path>
                        <path
                            fill="#EB8F35"
                            d="m16.596 15.702.51 3.958-3.319-2.298z"
                        ></path>
                        <path
                            fill="#EA8E3A"
                            d="m13.532 11.617-.319 5.426.957-2.777z"
                        ></path>
                        <path
                            fill="#D87C30"
                            d="m19.532 15.766-2.936-.064.51 3.958zm3 5.617-5.426-1.723 2.426-3.894 4.404.319z"
                        ></path>
                        <path
                            fill="#E8821E"
                            d="m13.915 6.638 2.745 2.298 2.106 2.553-5.234.192z"
                        ></path>
                        <path
                            fill="#393939"
                            d="m14.936 12.766-.702 1.468 2.49-.638z"
                        ></path>
                        <path
                            fill="#E88F35"
                            d="m22.596.064-8.681 6.574 1.468-3.574z"
                        ></path>
                        <path
                            d="m22.596.064 1.149 3.51-.639 3.83.447.256-.638.574.51.447-.702.638.447.383-1.021 1.277-4.787-1.468c-2.34-1.873-3.49-2.83-3.447-2.873.042-.042 2.936-2.234 8.68-6.574z"
                            fill="#8E5A30"
                        ></path>
                    </svg>
                    REI Chain{' '}
                    {(window as any).ethereum?.networkVersion === '55555'
                        ? '✅'
                        : ''}
                </div>
            </div>
            <div className="_dp-f _pst-asl-lg _l-0px _r-0px  _w-fc-md _fdrt-cl _fdrt-r-md _alit-ct _mgh-at-md _fs-400 _fw-400">
                <Link
                    className="rei-button -ghost _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pd-8px-md _mgv-4px _mgh-8px"
                    style={{
                        backgroundColor: 'rgb(255 253 242)',
                    }}
                    to="./ecosystem"
                >
                    Ecosystem
                </Link>
                <a
                    className="rei-button -ghost _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pd-8px-md _mgv-4px _mgh-8px"
                    style={{
                        backgroundColor: 'rgb(255 253 242)',
                    }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://killswitchofficial.gitbook.io/rei-chain/developer/get-started"
                >
                    Developer
                </a>
                {/* <Link
                    className="rei-button -ghost -disabled _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pd-8px-md _mgv-4px _mgh-8px"
                    style={{
                        backgroundColor: 'rgb(255 253 242)',
                    }}
                    to="/#community"
                >
                    Community
                    <span className="_fw-300 _fs-100 _cl-text-default-3 _mgl-2px _mgt-2px">
                        (Soon)
                    </span>
                </Link> */}
                <CustomDropdown
                    Button={({ onClick }) => (
                        <button
                            className="rei-button -ghost _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pd-8px-md _mgv-4px _mgh-8px"
                            style={{
                                backgroundColor: 'rgb(255 253 242)',
                            }}
                            onClick={onClick}
                        >
                            Utility
                        </button>
                    )}
                    caret={true}
                    dropdownList={[
                        <a
                            key="1"
                            className="rei-button -ghost _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pdv-12px-md _pdh-24px-md"
                            style={{
                                backgroundColor: 'rgb(255 253 242)',
                            }}
                            href="https://airdrop.reichain.io"
                        >
                            Airdrop
                        </a>,
                    ]}
                />
                <a
                    className="rei-button -ghost -disabled _bgcl-tpr-md _bgcl-shader-hover _fw-400 _w-100pct _pd-8px-md _mgv-4px _mgh-8px"
                    style={{
                        backgroundColor: 'rgb(255 253 242)',
                    }}
                >
                    Learn
                    <span className="_fw-300 _fs-100 _cl-text-default-3 _mgl-2px _mgt-2px">
                        (Soon)
                    </span>
                </a>
            </div>{' '}
        </>
    )
}

export default HeaderLinks
