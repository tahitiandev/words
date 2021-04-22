export interface Words{
    francais : WordDetail;
    anglais : WordDetail;
    syncToFirebase : boolean;
}

export interface WordDetail{
    word : string;
    hide : boolean;
}

export interface ChoixReponsePossible{
    francais : string;
    anglais : string;
    bonMot : boolean;
    emplacement : number;
  }