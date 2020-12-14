import React from 'react'

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Github } from 'styled-icons/boxicons-logos/Github'

import * as S from './styled'

const SocialButtons = () => {
    return (
        <S.SocialButtonsContainer>
            <S.SocialButtonsRow>
                <S.SocialButtonsCol>
                    <S.SocialButtonsLink
                        target="_blank"
                        href="https://www.facebook.com/autoaltop/?modal=admin_todo_tour"
                        class="btn btn-facebook icon-only"
                        rel="noopener noreferrer"
                    >
                        <i class="fa fa-facebook"></i>
                    </S.SocialButtonsLink>
                </S.SocialButtonsCol>

                <S.SocialButtonsCol>
                    <S.SocialButtonsLink
                        target="_blank"
                        href="https://t.me/autoaltop"
                        class="btn btn-telegram icon-only"
                        rel="noopener noreferrer"
                    >
                        <i class="fa fa-telegram"></i>
                    </S.SocialButtonsLink>
                </S.SocialButtonsCol>

                <S.SocialButtonsCol>
                    <S.SocialButtonsLink
                        target="_blank"
                        href="https://www.youtube.com/channel/UCYwJ_AY9C96H3hCdLCGnLaw?view_as=subscriber"
                        class="btn btn-you-tube icon-only"
                        rel="noopener noreferrer"
                    >
                        <i class="fa fa-youtube"></i>
                    </S.SocialButtonsLink>
                </S.SocialButtonsCol>

                <S.SocialButtonsCol>
                    <S.SocialButtonsLink href="#" class="btn btn-rss icon-only">
                        <i class="fa fa-rss"></i>
                    </S.SocialButtonsLink>
                </S.SocialButtonsCol>
            </S.SocialButtonsRow>
        </S.SocialButtonsContainer>
    )
}

export default SocialButtons
