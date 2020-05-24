import { Component, OnInit } from '@angular/core';
import { Oefening } from '../Models/oefening';
import { WorkOutPlan } from '../Models/work-out-plan';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {


  public actieveOefening: Oefening;
  private oefeningNummer: number = 0;
  workoutPlan: WorkOutPlan = new WorkOutPlan;

  constructor() {


    this.workoutPlan.Naam = 'Thuis oefeningen';
    this.workoutPlan.Titel = 'Thuis oefeningen';
    this.workoutPlan.RustTussenOefeningen = 5;
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'JumpingJacks',
        'Jumping jacks',
        'Zwaai in een springbeweging je armen en benen naar binnen en naar buiten. Je maakt jezelf dus telkens breed of smal tijdens iedere sprong.',
        3
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'WallSit',
        'Wall sit',
        'Sta met je rug tegen een muur en zet je voeten op schouderbreedte uit elkaar. Vervolgens zak je met je billen naar beneden, totdat je knieën een hoek van negentig graden vormen.',
        3
      )
    );
    this.workoutPlan.Oefeningen.push(
      new Oefening(
        'PushUp',
        'Push-up',
        'Ga op je knieen zitten en zet je handen op schouderbreedte uit elkaar op de grond. Vervolgens strek je je knieën, zodat je op je tenen komt te staan. Zak vervolgens door je armen. Wanneer je bijna de grond aanraakt met je neus, druk je jezelf in een rechte lijn weer omhoog.',
        3
      )
    );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'AbdominalCrunch',
    //     'Abdominal crunch',
    //     'Ga op je rug liggen en strek je armen naar voren. Zet je voeten op de grond en buig je knieën zodat ze naar boven wijzen. Houd je onderrug op de grond, maar druk je schouders in een rustige beweging van de grond. Als het goed is voel je dat je buikspieren aan het werk moeten!',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'Step-upOntoChair',
    //     'Step-up onto chair',
    //     'Pak een stoel en ga recht voor de zitting staan. Stap eerst met je rechter been op de zitting, waarna je linkerbeen volgt. Ga nu weer naar beneden en begin nu met je linker been. Houd je je rug zo recht mogelijk tijdens de oefening.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'Squat',
    //     'Squat',
    //     'Zet je benen op schouderbreedte uit elkaar en duw je billen naar achter. Zak net zo laag totdat je knieën een hoek van negentig graden vormen. Houd deze houding gedurende een seconde aan en duw jezelf daarna weer naar omhoog.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'TricepsDipOnChair',
    //     'Triceps dip on chair',
    //     'Pak een stoel en ga met je rug richting de zitting van de stoel staan. Plaats je handen op de hoeken van de zitting. Plaats je hakken op de grond en druk jezelf nu naar boven en beneden met je armen.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'Plank',
    //     'Plank',
    //     'Ga op je knieën zitten en buig voorover zodat je leunt op je ellenbogen. Strek nu je benen en vorm een rechte lijn met je lichaam. Houd deze houding dertig seconden vast.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'HighKneesRunningInPlace',
    //     'High knees running in place',
    //     'Oftewel, knieheffen op dezelfde plaats. Het is hierbij belangrijk dat je je rug recht houdt en je je knieën in een hoog tempo om de beurt zo hoog mogelijk in de lucht brengt.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'Lunge',
    //     'Lunge',
    //     'Sta rechtop met je voeten bij elkaar. Vervolgens stap je met je rechterbeen naar voren en zak je naar beneden zodat je knie een hoek van negentig graden vormt. Met je linkerbeen buig je ook naar beneden, waardoor je knie bijna bij de grond komt. Druk jezelf omhoog en doe de oefening nu met je andere been.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'Push-upAndRotation',
    //     'Push-up and rotation',
    //     'Doe een push-up en wijs na iedere push up met een gestrekte arm de lucht in. Kijk je arm achterna en wissel telkens van arm na iedere push-up.',
    //     3
    //   )
    // );
    // this.workoutPlan.Oefeningen.push(
    //   new Oefening(
    //     'SidePlank',
    //     'Side plank',
    //     'Ga op je zij liggen en houd je onderarm op de grond. Je elleboog moet in een rechte lijn met je pols liggen en recht onder je schouder. Vervolgens druk je je heupen omhoog, zodat je lichaam een rechte lijn vormt. Houd deze houding enkele seconden vast. Klaar? Doe dezelfde oefening nog een keer, maar leun nu op je andere elleboog.',
    //     3
    //   )
    // );
    //this.workoutPlan.Oefeningen.push(new Oefening("", "", "", 30));

    // this.actieveOefening = this.workoutPlan.Oefeningen[0];

    // this.actieveOefening.tijdsduur;
  }

  private interval;
  private pause: boolean = false;
  public timeLeft: number = 0;

  private seconds: number = 0;
  private minutes: number = 0;
  private hours: number = 0;
  public duration: string;

  startOefeningen() {
    this.oefeningNummer = 0;
    this.timeLeft = 0;
    this.pause = false;

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {


        if (this.pause == false) {
          this.actieveOefening = this.workoutPlan.Oefeningen[
            this.oefeningNummer
          ];
          this.timeLeft = this.actieveOefening.tijdsduur;
          this.pause = true;
          this.oefeningNummer++;
        } else {
          if (this.workoutPlan.Oefeningen.length === this.oefeningNummer) {
            this.actieveOefening.titel = "Gefeliciteerd!";
            this.actieveOefening.beschrijving = "Uw heeft alle oefeningen gemaakt.";
            this.pauseTimer();
          }
          else {
            this.actieveOefening.titel = "Pause";
            this.actieveOefening.beschrijving = "Even rusten";
            this.timeLeft = this.workoutPlan.RustTussenOefeningen;
            this.pause = false;
          }

        }
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


  ngOnInit(): void {
  }

}
