module Main (..) where


import Html
import Mouse
import Keyboard


type alias Model =
    { count : Int }


initialModel : Model
initialModel =
    { count = 0 }


type Action    
    = NoOp
    | MouseClick Int
    | KeyPress


view : Model -> Html.Html
view model =
    Html.text (toString model.count)


update : Action -> Model -> Model
update action model =
    case action of
        MouseClick amount -> 
            { model | count = model.count + amount }    
        
        KeyPress -> 
            {model | count = model.count - 1 }

        NoOp ->
            model


mouseClickSignal : Signal.Signal Action
mouseClickSignal =
    Signal.map (\_ -> MouseClick 2) Mouse.clicks            


keyPressSignal : Signal.Signal Action
keyPressSignal =
    Signal.map (\_ -> KeyPress) Keyboard.presses


actionSignal : Signal.Signal Action
actionSignal =
    Signal.merge mouseClickSignal keyPressSignal    


modelSignal : Signal.Signal Model
modelSignal = 
    Signal.foldp update initialModel actionSignal


main : Signal.Signal Html.Html
main =
    Signal.map view modelSignal