
import React, { Component } from 'react'
//import tw from 'twin.macro'
import ParticleAnimation from 'react-particle-animation'

class Particles extends Component {
  render () {
    return (
      <ParticleAnimation 
        numParticles={300}
        interactive={true} 
        color={{ r: 158, g: 217, b: 249, a: 255 }}
        background= {{ r: 125, g: 155, b: 155, a: 1 }}
        lineWidth ={2.0}
        particleRadius={1}
        particleSpeed={0.3}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}      
      />
    );
  }
}

export  default Particles;