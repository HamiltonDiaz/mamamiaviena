import { Grid, Typography } from '@mui/material'
import React from 'react'
import AppFrame from './AppFrame'
import imgViena from "../assets/viena.png";
import fondoImg from "../assets/fondoPageV2.png";

const CreatorPage = () => {
    return (
        <Grid sx={{ maxHeight:"100%", backgroundImage: `url(${fondoImg})` }}>


            <AppFrame>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ padding: 5, paddingTop: 1}}
                >
                    <Grid item xs={12} >
                        <Typography variant="h3" textAlign={"center"}
                            sx={{
                                fontFamily: " Caveat !important",
                                color: "#F2AD9F !important",
                                display: { xs: "flex", md: "none" }
                            }} >
                            Nuestra Creadora
                        </Typography>

                        <Typography variant="h1" textAlign={"left"}
                            sx={{
                                fontFamily: " Caveat !important",
                                color: "#F2AD9F !important",
                                display: { xs: "none", md: "flex" }
                            }} >
                            Nuestra Creadora
                        </Typography>

                    </Grid>



                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }} >
                        <img src={imgViena} alt="imagen Creadora" />
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Typography variant="h6" align='justify' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut officiis consequatur consectetur natus totam possimus quisquam quis odit provident vitae aliquam minus asperiores labore, ipsa id sit veniam nisi?
                            Veritatis ex laborum qui laudantium voluptatum distinctio ad commodi optio quas, aliquid libero debitis mollitia quisquam provident, facilis cupiditate alias! Magnam quos omnis, sapiente est natus eaque. Sint, quasi ullam?
                            Quibusdam mollitia sint et saepe, debitis reiciendis, optio quam ullam nesciunt eveniet assumenda quo dolorum autem! Nostrum ratione iste, eius tempora ab repellat optio dicta temporibus voluptates saepe, vel accusamus.
                            Suscipit maxime rem fuga? Sapiente est placeat quaerat fugiat ipsa assumenda, natus, nam laboriosam ut qui ex quo quis. Sequi esse doloremque voluptates obcaecati eos odio quidem dolores cupiditate eius?
                            Optio nobis perferendis adipisci, sed quis voluptatem dolores ab ipsa blanditiis esse et aut culpa quas sequi quibusdam quod, totam ad ratione assumenda? Officiis incidunt, accusamus sapiente commodi sed fugiat?
                            Esse culpa aut quas optio sit harum nemo incidunt deleniti praesentium earum aspernatur totam suscipit, numquam consequuntur repellendus cumque rem deserunt ipsum ab ad. Vel doloribus nisi cum culpa eius.
                            Cumque fuga harum voluptas totam temporibus illum animi provident fugiat tenetur non esse atque repellendus architecto necessitatibus, impedit ipsa nihil velit nulla quam, cupiditate enim, natus rem. Nemo, natus soluta.
                            Ipsa rerum explicabo laboriosam nesciunt, cupiditate labore quaerat eveniet maxime rem repudiandae iure quis voluptatibus molestiae cumque quo et, aliquid ea porro ratione, laborum ut debitis fuga laudantium. Sequi, enim?
                            Amet numquam rem, aliquam sunt, alias reiciendis quaerat sed a quis cupiditate facilis dicta fugiat corrupti, molestiae laudantium. Aliquam, consequatur mollitia! Odit, vero eligendi cumque sit amet soluta non molestiae.
                            Inventore aut odit magnam voluptatem cumque, eveniet, quo modi animi blanditiis pariatur rerum magni tempora. Nesciunt est pariatur, corporis saepe quo officia veritatis laudantium optio facere porro vero placeat animi?
                        </Typography>
                    </Grid>

                </Grid>
            </AppFrame>
        </Grid>
    )
}

export default CreatorPage