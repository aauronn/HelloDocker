export class CityToAdd {
    name: string;
    description: string;
}

export class City extends CityToAdd {
    id: string;
    pointsOfInterest: PointOfInterest[] = new Array<PointOfInterest>();
}

export class PointOfInterest {
    id: string;
    name: string;
    description: string;
}

