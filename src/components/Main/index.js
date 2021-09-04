/* eslint-disable no-useless-return */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import LikeButton from '../common/LikeButton';
import WrapperProjetos from './styles/WrapperProjetos';
import SectionTitle from './styles/SectionTitle';
import Contact from '../Contact';
import {
  Card, CardImage, Description, Title, UserInfo, UserName, UserPhoto, WrapperCards,
} from './styles/CardStyles';

export default function Main({ postsData }) {
  return (
    <>
      <WrapperProjetos>
        <SectionTitle>Meus Projetos</SectionTitle>
        <WrapperCards>
          {postsData[1].map((item, index) => (
            <Card>
              <NextLink href={`projetos/${item.repo}`} passHref>
                <span>
                  <Title>
                    <UserInfo>
                      <UserPhoto src="https://github.com/victordantasdev.png" alt="" />
                      <UserName>victordantasdev</UserName>
                    </UserInfo>

                    <Description>
                      {item.repo}
                    </Description>
                  </Title>
                  <CardImage src={postsData[0][index]} alt="" />
                </span>
              </NextLink>
              <LikeButton />
            </Card>
          ))}
        </WrapperCards>
        <Contact />
      </WrapperProjetos>
    </>
  );
}

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postsData: PropTypes.array.isRequired,
};
