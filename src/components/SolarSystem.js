import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planet-container">
          { planets
            .map((planet) => (<PlanetCard
              key={ planet.id }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
