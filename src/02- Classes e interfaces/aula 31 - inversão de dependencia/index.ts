// Inversão de dependencia -> para quando uma classe for associada a uma outra classe, será associada a classe abstrata e não a classe concreta

// exemplo: A classe escritor aponta para ferramenta que é uma classe abstrata e essa classe tem duas classes filhas concretas (caneta e maquina de Escrever), essas duas classses filhas apontam para mãe porque herdam dela e qualquer alteração em qualquer classe filha, não modifica nenhuma outra classe
