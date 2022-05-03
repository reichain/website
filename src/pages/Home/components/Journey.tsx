import classNames from 'classnames'

const LIST = [
    {
        title: 'Q1-2/ 2022',
        bulletList: [
            'Expand REI Coin Utilities to physical world.',
            'Scale and Partner with Thai corporates.',
        ],
    },
    {
        title: 'Q3-4/ 2022',
        bulletList: [
            'Develop REI Chain.',
            'Secure node validator partners.',
            'Publish REI Chain Lightpaper.',
            'Distribute REI token to the general public.',
            'Launch Reamverse; NFT game project.',
        ],
    },
]

const Bullet = ({
    item,
    style,
    className,
}: {
    item: typeof LIST[any]
    style?: React.CSSProperties
    className?: string
}) => (
    <div
        className={classNames(
            '_pdt-4px _pdh-16px _bdlw-2px-sm _bdlw-4px-lg ',
            className
        )}
        style={{
            borderLeft: '1px solid rgba(0, 0, 0, 1)',
            ...style,
        }}
    >
        <div className="_cl-text-default-1 _fs-500 _fs-600-sm _mgbt-4px">
            {item.title}
        </div>
        <div className="_ffml-secondary _fs-300 _fs-400-sm">
            {item?.bulletList?.map((bullet, index) => (
                <div key={index} className="_dp-f _alit-ct _mgbt-2px _mgl-8px">
                    <span className="_mgr-8px _fs-600 _lh-100pct">•</span>{' '}
                    {bullet}
                </div>
            ))}
        </div>
    </div>
)

export const Journey = () => {
    return (
        <div
            className="_pst-rlt _ovfx-clp _pdh-32px _pdv-32px _pdl-64px-sm _pdr-128px-sm _pdh-128px-md _pdh-256px-lg _mg-at"
            style={{ maxWidth: 1150 }}
        >
            <div className="_fs-500 _fs-800-sm _cl-primary-main _tal-ct _mgbt-8px">
                Journey
            </div>
            <div className="_ffml-secondary _fs-300 _fs-400-sm _cl-primary-light _tal-ct">
                Past, Present, Future
            </div>
            <div className="_pst-rlt _mgt-12px _mgt-256px-sm _mgr-128px-sm _dp-f _fdrt-cl _alit-ct">
                <Bullet
                    item={LIST[0]}
                    className="_dp-n _dp-b-sm _pst-asl-sm _pdbt-64px"
                    style={{
                        paddingBottom: 90,
                        left: '3%',
                        bottom: '40%',
                    }}
                />
                <Bullet
                    item={LIST[1]}
                    className="_dp-n _dp-b-sm _pst-asl-sm _tf-ihr-sm _w-100pct _pdbt-8px"
                    style={{
                        left: '90%',
                        top: -20,
                        transform: 'translateY(-100%)',
                    }}
                />
                <Bullet
                    item={LIST[0]}
                    className="_dp-b _dp-n-sm _w-100pct _mgv-12px"
                />
                <Bullet
                    item={LIST[1]}
                    className="_dp-b _dp-n-sm _w-100pct _mgv-12px"
                />
                <img
                    alt="Journey Node"
                    src="./images/home/journey/journey-node.png"
                    className="_mxw-256px _mxw-100pct-sm _mgt-32px _mgt-0px-sm"
                />
            </div>
        </div>
    )
}

export default Journey
