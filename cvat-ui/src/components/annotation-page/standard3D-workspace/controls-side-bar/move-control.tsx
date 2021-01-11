// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Icon from '@ant-design/icons';
import Tooltip from 'antd/lib/tooltip';

import { MoveIcon } from 'icons';
import { ActiveControl } from 'reducers/interfaces';
import { Canvas3d as Canvas } from 'cvat-canvas3d-wrapper';

interface Props {
    canvasInstance: Canvas;
    activeControl: ActiveControl;
}

function MoveControl(props: Props): JSX.Element {
    const { activeControl } = props;

    return (
        <Tooltip title='Move the image' placement='right' mouseLeaveDelay={0}>
            <Icon
                component={MoveIcon}
                className={
                    activeControl === ActiveControl.DRAG_CANVAS ?
                        'cvat-move-control cvat-active-canvas-control' :
                        'cvat-move-control'
                }
            />
        </Tooltip>
    );
}

export default React.memo(MoveControl);