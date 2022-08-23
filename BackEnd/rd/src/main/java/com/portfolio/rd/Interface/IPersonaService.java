
package com.portfolio.rd.Interface;

import com.portfolio.rd.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto/usuario buscandolo por ID
    public void deletePersona(Long id);
    
    //Buscar una persona buscandola por ID
    public Persona findPersona(Long id);
}
