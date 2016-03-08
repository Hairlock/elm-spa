module Update (..) where


import Models exposing (..)
import Actions exposing (..)
import Mailboxes exposing (..)
import Effects exposing (Effects)
import Routing
import Players.Update


update : Action -> AppModel -> ( AppModel, Effects Action )
update action model =
    case (Debug.log "action" action) of
        RoutingAction subAction ->
            let
                ( updatedRouting, fx ) =
                    Routing.update subAction model.routing
            in
                ( { model | routing = updatedRouting }, Effects.map RoutingAction fx )

        PlayersAction subAction ->
            let
                updateModel =
                    { players = model.players 
                    , showErrorAddress = Signal.forwardTo actionsMailbox.address ShowError
                    , deleteConfirmationAddress = askDeleteConfirmationMailbox.address
                    }

                ( updatedPlayers, fx ) =
                    Players.Update.update subAction updateModel
            in
                ( { model | players = updatedPlayers }, Effects.map PlayersAction fx )

        ShowError message ->
            ( { model | errorMessage = message }, Effects.none )

        NoOp ->
            ( model, Effects.none )

