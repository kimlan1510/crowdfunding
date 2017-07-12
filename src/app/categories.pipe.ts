import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'categories',
  pure: false
})

export class CategoriesPipe implements PipeTransform {

  transform(input: Project[], desiredCategory){
    var output: Project[] = [];
    if(desiredCategory === "Food"){
      for(var i=0; i<input.length; i++){
        if(input[i].categories === "Food"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredCategory === "Technology"){
      for(var i=0; i<input.length; i++){
        if(input[i].categories === "Technology"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredCategory === "Games"){
      for(var i=0; i<input.length; i++){
        if(input[i].categories === "Games"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }

}
