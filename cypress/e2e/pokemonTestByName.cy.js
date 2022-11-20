import {data} from  '../fixtures/PokemonList2.json'

describe('Verify All Pokemon by Name', () => {

    beforeEach(function(){ 
        cy.visit('http://127.0.0.1:5500/index.html')

        })
      
        it('passes', () =>  {
            data.allPokemons.forEach((pokemon, k) => {
            
            cy.get('.input__search').type (pokemon.pokemonname).type('{enter}')
            cy.wait(50)
            cy.get('.pokemon__number').contains(pokemon['"id"'])
            cy.get('.pokemon__name').contains(pokemon.pokemonname)

        })
    })


})