import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name:'Nhạc Cho Thứ Ba',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/2/9/b/829b64c4431f9d593b36ba23b29c089c.jpg'
        },
        {
            id:2,
            name:"Hà Nhi's Ex Story",
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/8/2/a282a0d1ca6dff2bdba8f0944af98a64.jpg'
        },
        {
            id:3,
            name:"Today's Ballad Hits",
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/f/6/f/5f6f7b52bf54acaee850713774ef826f.jpg'
        },
    ]
    return (
        <div>
            <h3>Thứ Ba-Llad</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;