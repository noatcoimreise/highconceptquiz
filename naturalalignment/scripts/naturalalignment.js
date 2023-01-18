var prompts = [
    [ /* role_none */
      {
        prompt: '<img src="images/naturalalignment.png" title="Natural Alignment" /><br />Natural Alignment',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" /><img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['nagroup', 'nagroup']
      }
    ],
    [ /* role_tank1 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'northgroup']
      },
    ],
    [ /* role_tank2 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'northgroup']
      },
    ],
    [ /* role_healer1 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
    ],
    [ /* role_healer2 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['leftgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['leftgroup', 'leftgroup']
      },
    ],
    [ /* role_mdps1 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'leftgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['leftgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps2" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
    ],
    [ /* role_mdps2 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['northgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'northgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-rdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
    ],
    [ /* role_rdps1 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps2" /><img src="images/nastatus.png" class="na-mdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps2" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps2" /><img src="images/nastatus.png" class="na-mdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps2" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
    ],
    [ /* role_rdps2 */
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-mdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/fire.png" title="Fire" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t2" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-t1" /><img src="images/nastatus.png" class="na-t2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-h1" /><img src="images/nastatus.png" class="na-h2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-mdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-mdps1" />',
        a: ['rightgroup', 'rightgroup']
      },
      {
        prompt: '<img src="images/ice.png" title="Ice" />',
        statusEffects: '<img src="images/nastatus.png" class="na-rdps1" /><img src="images/nastatus.png" class="na-mdps2" />',
        a: ['rightgroup', 'rightgroup']
      },
    ],
]

var ANSWERS = ["a_ne", "b_se", "c_sw", "3_nw", "2_nw", "nagroup", "leftgroup", "rightgroup", "northgroup", "southgroup", "tank1", "tank2", "healer1", "healer2", "mdps1", "mdps2", "rdps1", "rdps2", "finished" ];
var answer = [];
var inputAnswer = [];
var numCorrect = 0; // yeah yeah this naming is confusing
var correct = false;
var lastPrompt = 0;
var timeLimit = 0;
var timeoutEnabled = false;
var timeoutHandle;
var skipDone = false;

var ROLE_NONE = 0;
var ROLE_TANK1 = 1;
var ROLE_TANK2 = 2;
var ROLE_HEALER1 = 3;
var ROLE_HEALER2 = 4;
var ROLE_MDPS1 = 5;
var ROLE_MDPS2 = 6;
var ROLE_RDPS1 = 7;
var ROLE_RDPS2 = 8;

var role = ROLE_NONE;

let prompt = document.getElementById('prompt');
let next = document.getElementById('next');
let n = Math.floor(Math.random() * prompts[role].length);
prompt.innerHTML = prompts[role][n].prompt;
answer = prompts[role][n].a;

StartNewRound();

function StartNewRound() {
    if(correct == false)
        numCorrect = 0;

    correct = false;
    startTimerIfEnabled();

    let prompt = document.getElementById('prompt');

    prompt.className = '';
    document.getElementById('success').className = 'hideadd';
    ANSWERS.forEach((a) => {
        // console.log(a);
        let answerButton = document.getElementById(a);

        if (answerButton != null) {
          if (a == 'b_se' || a == 'a_ne' || a == 'c_sw' || a == '2_nw' || a == '3_nw') {
            answerButton.className = 'btn btn-primary btn-markers';
          } else if (a.includes("group")) {
            answerButton.className = 'btn btn-primary btn-concepts';
          } else if (a.includes("tank")) {
            a.className = 'btn btn-primary btn-tank';
          } else if (a.includes("healer")) {
            a.className = 'btn btn-primary btn-healer';
          } else if (a.includes("dps")) {
            a.className = 'btn btn-primary btn-dps';
          } else {
            answerButton.className = 'btn btn-primary';
          }
        }

    });


    let n = 1 + Math.floor(Math.random() * (prompts[role].length-1));
    n = (lastPrompt + n) % prompts[role].length;
    lastPrompt = n;
    prompt.innerHTML = prompts[role][n].prompt;
    document.getElementById('statusEffect').innerHTML = prompts[role][n].statusEffects;
    answer = prompts[role][n].a;
    inputAnswer = [];

    next.innerText = "Skip Question";

    let streak = document.getElementById('streak');
    streak.innerText = `Streak: ${numCorrect}`;

    document.getElementById('hephaistos1').className = 'hideadd';
    document.getElementById('hephaistos2').className = 'hideadd';
    document.getElementById('hephaistos3').className = 'hideadd';
    document.getElementById('hephaistos4').className = 'hideadd';

    if (Math.floor(Math.random() * 2)) {
        document.getElementById('hephaistos1').className = 'displayadd';

        if (answer[inputAnswer.length] == 'northgroup') {
          answer[inputAnswer.length] = 'southgroup';
        }

        if (answer[inputAnswer.length + 1] == 'southgroup') {
          answer[inputAnswer.length + 1] = 'northgroup';
        }
    } else {
        document.getElementById('hephaistos2').className = 'displayadd';

        if (answer[inputAnswer.length] == 'southgroup') {
          answer[inputAnswer.length] = 'northgroup';
        }

        if (answer[inputAnswer.length + 1] == 'northgroup') {
          answer[inputAnswer.length + 1] = 'southgroup';
        }
    }
}

var nextButton = document.getElementById('next');
nextButton.onclick = () => {
    StartNewRound();
}

document.getElementById('tank1').onclick = () => {
    role = ROLE_TANK1;
    StartNewRound();
}

document.getElementById('tank2').onclick = () => {
    role = ROLE_TANK2;
    StartNewRound();
}

document.getElementById('healer1').onclick = () => {
    role = ROLE_HEALER1;
    StartNewRound();
}

document.getElementById('healer2').onclick = () => {
    role = ROLE_HEALER2;
    StartNewRound();
}

document.getElementById('mdps1').onclick = () => {
    role = ROLE_MDPS1;
    StartNewRound();
}

document.getElementById('mdps2').onclick = () => {
    role = ROLE_MDPS2;
    StartNewRound();
}

document.getElementById('rdps1').onclick = () => {
    role = ROLE_RDPS1;
    StartNewRound();
}

document.getElementById('rdps2').onclick = () => {
    role = ROLE_RDPS2;
    StartNewRound();
}

var answerButtons = document.getElementById('answerButtons');
answerButtons.onclick = (e) => {
    if(e.target.id === 'answerButtons') {return;}
    let t = e.target;
    if (e.target.nodeName == "B")
       t = e.target.parentElement;
    console.log(t.id);
    let a = t.id;
    let b = a;

    if(b === answer[inputAnswer.length]) {
        if (document.getElementById('hephaistos1').className == 'displayadd') {
          document.getElementById('hephaistos1').className = 'hideadd';
          document.getElementById('hephaistos4').className = 'displayadd';
        }

        if (document.getElementById('hephaistos2').className == 'displayadd') {
          document.getElementById('hephaistos2').className = 'hideadd';
          document.getElementById('hephaistos3').className = 'displayadd';
        }

        if (a == 'b_se' || a == 'a_ne' || a == 'c_sw' || a == '2_nw' || a == '3_nw') {
          document.getElementById(a).className = 'btn btn-success btn-markers';
        } else if (a.includes("group")) {
          document.getElementById(a).className = 'btn btn-concepts';
        } else if (a.includes("tank")) {
          a.className = 'btn btn-primary btn-tank';
        } else if (a.includes("healer")) {
          a.className = 'btn btn-primary btn-healer';
        } else if (a.includes("dps")) {
          a.className = 'btn btn-primary btn-dps';
        } else {
          document.getElementById(a).className = 'btn btn-success';
        }
        inputAnswer.push(b);

        ANSWERS.forEach((a) => {
            let answerButton = document.getElementById(a);
            if (a == 'b_se' || a == 'a_ne' || a == 'c_sw' || a == '2_nw' || a == '3_nw') {
              a.className = 'btn btn-primary btn-markers';
            } else if (a.includes("group")) {
              a.className = 'btn btn-primary btn-concepts';
            } else if (a.includes("tank")) {
              a.className = 'btn btn-primary btn-tank';
            } else if (a.includes("healer")) {
              a.className = 'btn btn-primary btn-healer';
            } else if (a.includes("dps")) {
              a.className = 'btn btn-primary btn-dps';
            } else {
              a.className = 'btn btn-primary';
            }
        });

        let skip = 0;
        if(skipDone)
            skip = 1;

        if(inputAnswer.length >= answer.length - skip) {
            let prompt = document.getElementById('prompt');
            prompt.className = 'bg-success promptsuccess';
            document.getElementById('success').className = 'displayadd';
            next.innerText = "Next!";

            if(inputAnswer.length == answer.length - skip)
                numCorrect+=1
            correct = true;
        }
    } else {
        if (!t.id.includes("tank") && !t.id.includes("healer") && !t.id.includes("dps") && !t.id.includes("success")) {
          t.className = t.className + ' btn-fail';
          document.getElementById('hephaistos1').className = 'hideadd';
          document.getElementById('hephaistos2').className = 'hideadd';
          document.getElementById('hephaistos3').className = 'hideadd';
          document.getElementById('hephaistos4').className = 'hideadd';
        }
        numCorrect = 0;
    }
    let streak = document.getElementById('streak');
    streak.innerText = `Streak: ${numCorrect}`;
}

function toggleDone()
{
    skipDone = !skipDone;
}

function timerEnableToggled(checkbox)
{
    if(checkbox.checked == true) {
        document.getElementById("timeLimitInput").removeAttribute("disabled");
        timeoutEnabled = true;
        startTimerIfEnabled();
    } else {
        document.getElementById("timeLimitInput").setAttribute("disabled", "disabled");
        timeoutEnabled = false;
        resetTimer();
   }
}


function timerEnableToggled(checkbox)
{
    if(checkbox.checked == true) {
        document.getElementById("timeLimitInput").removeAttribute("disabled");
        timeoutEnabled = true;
        startTimerIfEnabled();
    } else {
        document.getElementById("timeLimitInput").setAttribute("disabled", "disabled");
        timeoutEnabled = false;
        resetTimer();
   }
}

function startTimerIfEnabled() {
    // Reset timer so that users don't fail twice
    resetTimer();

    if (timeoutEnabled) {
        timeLimit = parseInt(document.getElementById('timeLimitInput').value);
        timeoutHandle = setTimeout(failure, timeLimit * 1000);
    }
}

function resetTimer() {
    if (timeoutHandle != null) {
        clearTimeout(timeoutHandle);
        timeoutHandle = null;
    }
}

function failure() {
    if (correct === false) {
        numCorrect = 0;
        let streak = document.getElementById('streak');
        streak.innerText = `Streak: ${numCorrect}`;
    
        alert("Time out - You died");
    }
}