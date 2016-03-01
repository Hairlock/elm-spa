module Routing (..) where


import Effects exposing (Effects, Never)
import Hop


{-
Routing Actions

HopAction : is called after Hop has changed the location, we usually don't care about this action
ShowPlayers : Action that instructs to show the players page
ShowPlayerEdit : Action to show the Edit player page
ShowNotFound : Action that triggers when the browser location doesn't match any of our routes
NavigateTo : Action to change the browser location
-}


type Action
    = HopAction Hop.Action
    | ShowPlayers Hop.Payload
    | SHowPlayerEdit Hop.Payload
    | ShowNotFound Hop.Payload
    | NavigateTo String
    | NoOp