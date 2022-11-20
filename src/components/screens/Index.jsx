import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Index() {
    const [category, setCategory] = useState([]);
    console.log(category);

    useEffect(() => {
        axios
            .get(
                "https://d2w20tuu2vbvr.cloudfront.net/miscs/cats?orgId=1637320776228"
            )
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setCategory(res.data.items);
                    console.log(res.data);
                }
            });
    }, []);
    return (
        <Container>
            {category.map((list) => {
                {
                    console.log(list.title);
                }
                return (
                    <Section>
                        <Title>{list.title}</Title>
                    </Section>
                );
            })}
        </Container>
    );
}

export default Index;
const Container = styled.div``;
const Section = styled.div``;
const ImageContainer = styled.div`
    width: 300px;
    img {
        width: 100%;
        display: block;
    }
`;
const Title = styled.h1``;
