import Accordion from '@growth-ui/react/modules/Accordion';
import React from 'react';

const AccodionExampleAccordion = () => (
  <Accordion>
    <Accordion.Panel>
      <Accordion.Title>
        McDonald’s once made bubblegum-flavored broccoli
      </Accordion.Title>
      <Accordion.Content>
        This interesting fact will have your taste buds crawling.
        Unsurprisingly, the attempt to get kids to eat healthier didn’t go over
        well with the child testers, who were “confused by the taste.”
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>
        Some fungi create zombies, then control their minds
      </Accordion.Title>
      <Accordion.Content>
        The tropical fungus Ophiocordyceps infects ants’ central nervous
        systems. By the time the fungi been in the insect bodies for nine days,
        they have complete control over the host’s movements. They force the
        ants to climb trees, then convulse and fall into the cool, moist soil
        below, where fungi thrive. Once there, the fungus waits until exactly
        solar noon to force the ant to bite a leaf and kill it.
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>The first oranges weren’t orange</Accordion.Title>
      <Accordion.Content>
        The original oranges from Southeast Asia were a tangerine-pomelo hybrid,
        and they were actually green. In fact, oranges in warmer regions like
        Vietnam and Thailand still stay green through maturity.
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);

export default AccodionExampleAccordion;
