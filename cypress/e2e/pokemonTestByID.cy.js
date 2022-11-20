import {data} from  '../fixtures/PokemonList2.json'

describe('Verify All Pokemon by ID', () => {

    beforeEach(function(){ 
        cy.visit('http://127.0.0.1:5500/index.html')

        })
      
        it('passes', () =>  {
            data.allPokemons.forEach((pokemon, k) => {
            cy.wait(200)
            cy.get('.input__search').type (pokemon['"id"']).type('{enter}')
            cy.get('.pokemon__number').contains(pokemon['"id"'])
            cy.get('.pokemon__name').contains(pokemon.pokemonname)

        })
    })


})