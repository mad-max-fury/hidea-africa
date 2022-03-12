import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const HowToAccordion = ({ heading, paragraph }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple padding={'0'}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(a => {
          return <AccordionItem border={'0'}>
            <h2>
              <AccordionButton _expanded={{ bg: '#f5f5f7' }} >
                <Box flex='1' textAlign='left'>
                  How to register my business?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textColor='GrayText' display={'flex'} flexDirection='column' gap={'1rem'} textAlign='start'>
              <p>   Commodo sunt exercitation commodo ullamco labore laboris occaecat duis nostrud aute magna nostrud est. Dolor et eiusmod nulla aute elit labore. Velit irure dolore ex officia eiusmod non cillum esse est irure et velit fugiat. Quis cupidatat ex reprehenderit ut. Consectetur Lorem culpa ea dolor proident officia labore laboris id nulla deserunt in cupidatat do. Enim culpa consectetur nisi aute duis ut nulla adipisicing amet pariatur amet magna.</p>

              <p>Elit nulla officia velit dolor sint est sunt deserunt sit nulla et. Est adipisicing nostrud aliqua elit sit incididunt exercitation velit aliquip velit commodo consequat magna. Mollit elit id esse enim pariatur. Veniam quis tempor laboris non deserunt pariatur sit sint incididunt.</p>
            </AccordionPanel>
          </AccordionItem>
        })
      }
    </Accordion>
  )
}

export default HowToAccordion