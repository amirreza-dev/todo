import React from 'react';

const About = ({ teachersName }) => {
    return (
        <div className='card text-center'>
            <div className='card-header'>درباره سازنده</div>
            <div className='card-body'>
                <h5 className='card-title'>دوره جامع ری اکت</h5>
                <p className='card-text'>مدرس : یونس قربانی</p>
                <a href='toplearn.com/c/qxl2' className='btn btn-primary'>
                    برو به دوره
                </a>
            </div>
            <div className='card-footer text-muted'>
                زیاد نمونده تا دوره به پایان برسه
            </div>
        </div>
    );
};

export default About;
