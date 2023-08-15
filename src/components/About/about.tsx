import React from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useRecoilState } from 'recoil';
import { isMobileState } from '../../states/atom'

const About = () => {
    const [isMobile, setIsMobile] = useRecoilState(isMobileState);

    return (
        <Grid container>
            <Grid container component="div" direction="column" alignItems="center" pt={10} pb={15}
                  css={{ color: 'black' }}>
                <Typography variant="h3">ABOUT ME</Typography>
                <Grid container component='div' css={css`border-bottom:5px solid blue;width:70px;`} pt={2} mb={4}></Grid>

                <Grid container direction="row" justifyContent="center" alignItems="start">
                    <Grid item container xs={isMobile?5:4} pl={2} direction="row" alignItems="start">
                        <FaceIcon fontSize="large" sx={{ color: 'black' }} />
                        <Grid item container xs={'auto'} pl={1} direction="column" alignItems="start">
                            <Typography variant="h5">이름</Typography>
                            <Typography variant="h6">조은진</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={isMobile?7:4} pl={2} direction="row" alignItems="start">
                        <CalendarMonthIcon fontSize="large" sx={{ color: 'black' }} />
                        <Grid item container xs={'auto'} pl={1} direction="column" alignItems="start">
                            <Typography variant="h5">생년월일</Typography>
                            <Typography variant="h6">1995년 9월 23일</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={isMobile?7:4} pl={2} direction="row" alignItems="start">
                        <LocalPhoneIcon fontSize="large" sx={{ color: 'black' }} />
                        <Grid item container xs={'auto'} pl={1} direction="column" alignItems="start">
                            <Typography variant="h5">연락처</Typography>
                            <Typography variant="h6">010-5788-5287</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={isMobile?12:4} pl={2} direction="row" alignItems="start">
                        <EmailIcon fontSize="large" sx={{ color: 'black' }} />
                        <Grid item container xs={'auto'} pl={1} direction="column" alignItems="start">
                            <Typography variant="h5">EMAIL</Typography>
                            <Typography variant="h6">gdandtop@naver.com</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={isMobile?12:4} pl={2} direction="row" alignItems="start"></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About