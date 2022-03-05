import React from 'react'
import IdeaCard from '../components/IdeaCard'
import { ideasModel } from '../../../../model/ideas.model'

import { Grid } from '@chakra-ui/react'


const TheIdeas = () => {
    return (
        <Grid w="full" templateColumns="repeat(2, 1fr)" gap="4">
            {
                ideasModel.map(idea => (
                    <IdeaCard seller={{ seller_name: idea.seller.seller_name, image: idea.seller.image }} sector={idea.sector} invState={idea.invState} percentage={idea.investment.equity} />
                ))
            }
        </Grid>

    )
}

export default TheIdeas