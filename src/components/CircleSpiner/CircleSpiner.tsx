import classNames from 'classnames'
import './styles.scss'

export const CircleSpiner = ({
    dotSize,
    className,
    style,
    size,
    strokeWidth,
    isSingle = false,
}) => (
    <section
        className={classNames('circle', className)}
        style={{
            '--size': size,
            '--stroke-width': strokeWidth,
            color: 'rgba(37, 37, 37, 1)',
            ...style,
        }}
    >
        <svg
            className="spinner"
            width="174px"
            height="174px"
            viewBox="0 0 66 66"
        >
            <circle
                className="path"
                fill="transparent"
                strokeWidth="2"
                cx="33"
                cy="33"
                r="30"
                stroke="currentColor"
            />
            {!isSingle && (
                <svg
                    className="spinner-dot dot"
                    width="5px"
                    height="5px"
                    viewBox="0 0 66 66"
                    x="37"
                    y="1.2"
                >
                    <circle
                        className="path"
                        fill="currentColor"
                        cx="33"
                        cy="33"
                        r={dotSize}
                    />
                </svg>
            )}
            <svg
                className="spinner-dot dot"
                width="5px"
                height="5px"
                viewBox="00 0 66 66"
                x="55"
                y="48"
            >
                <circle
                    className="path"
                    fill="currentColor"
                    cx="33"
                    cy="33"
                    r={dotSize * 2}
                />
            </svg>
        </svg>
    </section>
)

export default CircleSpiner
