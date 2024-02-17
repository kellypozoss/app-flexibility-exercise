import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'

declare var require: any
const data: any = require('src/assets/company.json')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public weight: number = 0
  public size: number = 0
  public gender: number = 1

  public sendData(): void {
    console.log(this.weight + ', ' + this.size + ', ' + this.gender)
  }

  displayedColumns: string[] = [
    'gender',
    'size1',
    'size2',
    'size3',
    'size4',
    'size5',
    'size6',
    'size7',
    'size8',
    'size9',
    'size10',
    'size11',
    'size12',
    'size13',
    'size14',
    'size15',
    'size16',
  ]
  dataSource = new MatTableDataSource<MaleSize>(ELEMENT_DATA)
  secondDataSource = new MatTableDataSource<FemaleSize>(ELEMENTS)

  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('paginator2') paginator2!: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.secondDataSource.paginator = this.paginator2
  }

  constructor() {}

  getColor(value: string): string {
    if (value === 'SemiFlex') {
      return 'lightgreen'
    } else if (value === 'SemiRigid') {
      return 'lightyellow'
    } else if (value === 'Rigid') {
      return 'lightcoral'
    } else if (value === 'UltraRigid') {
      return 'red'
    } else {
      return 'white'
    }
  }
}
export interface MaleSize {
  gender: string
  size1: string
  size2: string
  size3: string
  size4: string
  size5: string
  size6: string
  size7: string
  size8: string
  size9: string
  size10: string
  size11: string
  size12: string
  size13: string
  size14: string
  size15: string
  size16: string
}

export interface FemaleSize {
  gender: string
  size1: string
  size2: string
  size3: string
  size4: string
  size5: string
  size6: string
  size7: string
  size8: string
  size9: string
  size10: string
  size11: string
  size12: string
  size13: string
  size14: string
  size15: string
  size16: string
}

const ELEMENT_DATA: MaleSize[] = [
  {
    gender: '6',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'SemiRigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '7',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '8',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '9',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '10',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '11',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '12',
    size1: 'SemiFlex',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '13',
    size1: 'SemiFlex',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '14',
    size1: 'SemiRigid',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '15',
    size1: 'SemiRigid',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'Rigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'UltraRigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '16',
    size1: 'SemiRigid',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'Rigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'UltraRigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '17',
    size1: 'SemiRigid',
    size2: 'SemiRigid',
    size3: 'Rigid',
    size4: 'Rigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'UltraRigid',
    size12: 'UltraRigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
]

const ELEMENTS: FemaleSize[] = [
  {
    gender: '5',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiFlex',
    size6: 'SemiFlex',
    size7: 'SemiRigid',
    size8: 'SemiRigid',
    size9: 'SemiRigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'Rigid',
  },
  {
    gender: '6',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiFlex',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'SemiRigid',
    size9: 'SemiRigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '7',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiFlex',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'SemiRigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '8',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'SemiRigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '9',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiFlex',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'UltraRigid',
  },
  {
    gender: '10',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'SemiRigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'Rigid',
    size16: 'Rigid',
  },
  {
    gender: '11',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiFlex',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '12',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'SemiRigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'Rigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '13',
    size1: 'SemiFlex',
    size2: 'SemiFlex',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'SemiRigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '14',
    size1: 'SemiFlex',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'Rigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '15',
    size1: 'SemiFlex',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
  {
    gender: '16',
    size1: 'SemiRigid',
    size2: 'SemiRigid',
    size3: 'SemiRigid',
    size4: 'SemiRigid',
    size5: 'Rigid',
    size6: 'Rigid',
    size7: 'Rigid',
    size8: 'Rigid',
    size9: 'Rigid',
    size10: 'Rigid',
    size11: 'Rigid',
    size12: 'Rigid',
    size13: 'UltraRigid',
    size14: 'UltraRigid',
    size15: 'UltraRigid',
    size16: 'UltraRigid',
  },
]
