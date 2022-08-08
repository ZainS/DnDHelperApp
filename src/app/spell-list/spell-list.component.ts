import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})


export class SpellListComponent implements OnInit {


  spellList: any;

  constructor(private service: SpellService) { }



  ngOnInit(): void {
    const spellList$ = this.service.getSpellList().pipe(map(spellList => spellList.results));
    spellList$.subscribe((value) => {
      this.spellList = value
    });
    console.log(this.spellList)
  }

}
