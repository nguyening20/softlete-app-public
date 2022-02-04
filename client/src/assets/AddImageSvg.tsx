import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg width="512" height="476" viewBox="0 0 512 476" xmlns="http://www.w3.org/2000/svg">
<path d="M432 0H80C35.8867 0 0 35.8867 0 80V360C0 404.113 35.8867 440 80 440H270C277.629 440 284.594 435.66 287.957 428.809C291.316 421.961 290.488 413.793 285.816 407.762L233.504 340.152L378.496 155.727L472 267.273V301C472 312.047 480.953 321 492 321C503.047 321 512 312.047 512 301V80C512 35.8867 476.113 0 432 0V0ZM393.328 111.152C389.457 106.535 383.719 103.898 377.688 104.004C371.66 104.098 366 106.902 362.277 111.641L208.262 307.535L155.816 239.762C152.027 234.863 146.188 232 140 232C139.992 232 139.98 232 139.973 232C133.773 232.008 127.926 234.891 124.148 239.805L80.1328 297.023C73.3984 305.781 75.0352 318.336 83.7891 325.07C92.5469 331.809 105.102 330.168 111.836 321.414L140.047 284.742L229.234 400H80C57.9453 400 40 382.055 40 360V80C40 57.9453 57.9453 40 80 40H432C454.055 40 472 57.9453 472 80V205.008L393.328 111.152ZM140 72C106.914 72 80 98.9141 80 132C80 165.086 106.914 192 140 192C173.086 192 200 165.086 200 132C200 98.9141 173.086 72 140 72ZM140 152C128.973 152 120 143.027 120 132C120 120.973 128.973 112 140 112C151.027 112 160 120.973 160 132C160 143.027 151.027 152 140 152ZM512 381C512 392.047 503.047 401 492 401H437V456C437 467.047 428.047 476 417 476C405.953 476 397 467.047 397 456V401H342C330.953 401 322 392.047 322 381C322 369.953 330.953 361 342 361H397V306C397 294.953 405.953 286 417 286C428.047 286 437 294.953 437 306V361H492C503.047 361 512 369.953 512 381Z" />
</svg>`

interface Props {
    fillColor: string
}

class AddImageSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.fillColor} />
        )
    }
}

export default AddImageSvg