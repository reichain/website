import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Divider from '@material-ui/core/Divider'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Popper from '@material-ui/core/Popper'
import classNames from 'classnames'
import React, { useState } from 'react'

// TODO: fixme
interface CustomDropDownProps {
    Button?: any
    onClick?: any
    buttonText?: any
    buttonIconClass?: any
    dropdownList?: any
    buttonProps?: any
    dropup?: any
    dropdownHeader?: any
    caret?: any
    dropPlacement?: any
    innerDropDown?: any
    popperClassName?: any
}

export default function CustomDropdown(props: CustomDropDownProps) {
    const [anchorEl, setAnchorEl] = useState<
        (EventTarget & HTMLButtonElement) | null
    >(null)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (anchorEl && anchorEl.contains(event.target as Node)) {
            setAnchorEl(null)
        } else {
            setAnchorEl(event.currentTarget)
        }
    }

    const handleClose = (event: React.MouseEvent<any>) => {
        if (anchorEl && anchorEl.contains(event.target as Node)) {
            return
        }
        setAnchorEl(null)
    }

    const handleCloseMenu = (param) => {
        setAnchorEl(null)
        if (props && props.onClick) {
            props.onClick(param)
        }
    }

    const {
        Button,
        buttonText,
        buttonIconClass,
        dropdownList,
        buttonProps,
        dropup,
        dropdownHeader,
        caret,
        dropPlacement,
        innerDropDown,
        popperClassName,
    } = props

    const dropDownMenu = (
        <MenuList role="menu" style={{ width: '100%' }}>
            {dropdownHeader !== undefined ? (
                <MenuItem
                    onClick={() => handleCloseMenu(dropdownHeader)}
                    style={{ width: '100%', padding: 0 }}
                >
                    {dropdownHeader}
                </MenuItem>
            ) : null}
            {dropdownList.map((prop, key) => {
                if (prop.divider) {
                    return (
                        <Divider
                            key={key}
                            onClick={() => handleCloseMenu('divider')}
                        />
                    )
                } else if (
                    prop.props !== undefined &&
                    prop.props['data-ref'] === 'multi'
                ) {
                    return (
                        <MenuItem
                            key={key}
                            style={{
                                overflow: 'visible',
                                padding: 0,
                                width: '100%',
                            }}
                        >
                            {prop}
                        </MenuItem>
                    )
                }
                return (
                    <MenuItem
                        key={key}
                        onClick={() => handleCloseMenu(prop)}
                        style={{ width: '100%', padding: 0 }}
                    >
                        {prop}
                    </MenuItem>
                )
            })}
        </MenuList>
    )
    return (
        <div className=" _w-100pct">
            <div className=" _w-100pct">
                {Button ? (
                    <Button onMouseOver={handleClick} />
                ) : (
                    <button
                        aria-label="Notifications"
                        aria-owns={anchorEl ? 'menu-list' : null}
                        aria-haspopup="true"
                        {...buttonProps}
                        onClick={handleClick}
                    >
                        {buttonIconClass !== undefined ? (
                            <i className={buttonIconClass}></i>
                        ) : null}
                        {buttonText !== undefined ? buttonText : null}
                        {caret ? <b /> : null}
                    </button>
                )}
            </div>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transition
                disablePortal
                placement={dropPlacement}
                className={classNames({
                    [popperClassName]: popperClassName,
                })}
            >
                {() => (
                    <Grow
                        in={Boolean(anchorEl)}
                        style={
                            dropup
                                ? { transformOrigin: '0 100% 0' }
                                : { transformOrigin: '0 0 0' }
                        }
                    >
                        <div
                            className="rei-card _bdw-0px"
                            onMouseLeave={handleClose}
                        >
                            {innerDropDown ? (
                                dropDownMenu
                            ) : (
                                <ClickAwayListener onClickAway={handleClose}>
                                    {dropDownMenu}
                                </ClickAwayListener>
                            )}
                        </div>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
