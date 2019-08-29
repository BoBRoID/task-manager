<?php


namespace app\controllers;


use app\models\Task;
use yii\filters\AccessControl;
use yii\rest\ActiveController;

class TaskController extends ActiveController
{

    public $modelClass = Task::class;

    public function behaviors()
    {
        $behaviors = [
            /*'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],*/
            'corsFilter'    =>  [
                'class' =>  \yii\filters\Cors::class,
                'cors'  =>  [
                    'Origin'    =>  ['http://localhost:8080', 'http://localhost:8081'],
                    'Access-Control-Allow-Credentials' => true,
                    'Access-Control-Request-Headers'   => ['content-type'],
                    'Access-Control-Max-Age'           => 3600,
                ]
            ]
        ];

        return array_merge(parent::behaviors(), $behaviors);
    }

}