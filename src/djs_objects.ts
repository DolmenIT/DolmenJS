import { djs } from "./dolmenjs.js";

export class djs_objects {
  objects: [] | undefined;

  constructor() {
    djs.debug.log("djs_objects:constructor");
  }

  create = () => {
    return
  }

  grid_count: number = 0;
  grid = (dom_parent: HTMLElement, json_parameter: any) => {
    class c_grid {
      cols: any = [];
      rows: any = [];
      constructor(dom_parent: HTMLElement, json_parameter: any) {
        dom_parent = dom_parent ?? document.body;

        djs.objects.grid_count++;

        // Création de la div principale pour la grille
        const gridDiv = document.createElement("grid");
        gridDiv.id = "g" + djs.objects.grid_count;
        gridDiv.style.display = `grid`;
        gridDiv.style.width = `100%`;
        gridDiv.style.height = `100%`;
        dom_parent.appendChild(gridDiv);

        // Création des colonnes ou des rangées en fonction de json_parameter
        if (json_parameter.columns) {
          // Création des colonnes
          let gridTemplateColumns = '';
          json_parameter.columns.forEach((width: any, index: any) => {
            let colDiv = document.createElement("grid-col");
            colDiv.id = gridDiv.id + `c${index + 1}`;
            colDiv.style.position = 'relative';
            if (typeof width === 'string') {
              gridTemplateColumns += width + ' ';
            }
            else {
              gridTemplateColumns += `${width}vw `;
            }
            gridDiv.appendChild(colDiv);
            this.cols[index + 1] = colDiv;
          });
          gridDiv.style.gridTemplateColumns = gridTemplateColumns;
        } else if (json_parameter.rows) {
          // Création des rangées
          let gridTemplateRows = '';
          json_parameter.rows.forEach((height: any, index: any) => {
            let rowDiv = document.createElement("grid-row");
            rowDiv.id = gridDiv.id + `r${index + 1}`;
            rowDiv.style.position = 'relative';
            if (typeof height === 'string') {
              gridTemplateRows += height + ' ';
            }
            else {
              gridTemplateRows += `${height}vh `;
            }
            gridDiv.appendChild(rowDiv);
            this.rows[index + 1] = rowDiv;
          });
          gridDiv.style.gridTemplateRows = gridTemplateRows;
        }
      }

      col = (n_col: number) => {
        return this.cols[n_col];
      }
      row = (n_row: number) => {
        return this.rows[n_row];
      }
    }
    return new c_grid(dom_parent, json_parameter);
  }

  link = (dom_parent: HTMLElement, json_parameter: any) => {
    class c_link {
      constructor(dom_parent: HTMLElement, json_parameter: any) {
        dom_parent = dom_parent ?? document.body;

        // Création de la div principale pour la grille
        const aLink = document.createElement("a");
        aLink.href = json_parameter.link;
        aLink.innerHTML = json_parameter.text;
        dom_parent.appendChild(aLink);

        return aLink;
      }
    }
    return new c_link(dom_parent, json_parameter);
  }

  element_count: number = 0;
  element = (dom_parent: HTMLElement, elementName: string, json_parameter: any) => {
    class c_element {
      constructor(dom_parent: HTMLElement, elementName: string, json_parameter: any) {
        dom_parent = dom_parent ?? document.body;
        json_parameter = json_parameter ?? {};

        djs.objects.element_count++;

        // Création de la div principale pour la grille
        const aElement = document.createElement("div");
        const sanitizedElementName = elementName.replace(/[^a-zA-Z0-9]/g, "_");

        aElement.id = "e" + djs.objects.element_count + "_" + sanitizedElementName;
        aElement.classList.add(sanitizedElementName);
        dom_parent.appendChild(aElement);

        json_parameter.dom_parent = aElement;

        djs.elements.load(elementName, json_parameter);
      }
    }
    return new c_element(dom_parent, elementName, json_parameter);
  }


  scroll = (dom_parent: HTMLElement, json_parameter: any) => {
    class c_scroll {
      constructor(dom_parent: HTMLElement, json_parameter: any) {
        dom_parent = dom_parent ?? document.body;

        // Création de la div principale pour la grille
        const aScroll = document.createElement("div");
        aScroll.style.width = `100%`;
        aScroll.style.height = `100%`;
        if (json_parameter.scroll == 'horizontal') {
          aScroll.style.overflowX = "scroll";
        }
        else if (json_parameter.scroll == 'vertical') {
          aScroll.style.overflowY = "scroll";
        }
        dom_parent.appendChild(aScroll);

        return aScroll;
      }
    }
    return new c_scroll(dom_parent, json_parameter);
  }
}
//EOF