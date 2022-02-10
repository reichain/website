export const Subscribe = () => {
    return (
        <div
            className="rei-card -outlined _w-100pct-sm _mgv-24px _mgh-12px _mgh-at-sm _pdv-24px _pdv-32px-sm _pdh-24px _pdh-48px-sm _dp-f-sm lo-12 _gg-12px _gg-16px-sm _gg-24px-md"
            style={{ maxWidth: 900 }}
        >
            <div className="_mgr-at">
                <div
                    className="_fs-600 _fs-600-sm _lh-130pct _mgbt-8px _mgbt-16px-md"
                    style={{ color: 'rgba(136, 49, 68, 1)' }}
                >
                    Subscribe to our newsletter
                </div>
                <div
                    className="_ffml-secondary _fs-200 _fs-200-sm"
                    style={{ color: 'rgba(98, 98, 98, 1)' }}
                >
                    The latest news, article, and resource sent to your inbox
                </div>
            </div>
            <div
                className="lo-12 _gg-12px _dp-f-sm _fdrt-cl _fdrt-r-sm _mgv-at-sm"
                style={{ gridTemplateRows: '1fr 1fr' }}
            >
                <input
                    className="_mnw-256px-sm _w-100pct _w-us-sm _ffml-secondary _fs-400 _pdh-12px _pdv-8px _mgr-12px"
                    style={{
                        border: '1px solid rgba(196, 196, 196, 1)',
                        color: 'rgba(98, 98, 98, 1)',
                    }}
                    placeholder="Your email"
                />
                <div className="rei-button _mnh-48px">Subscribe</div>
            </div>
        </div>
    )
}

export default Subscribe
